import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'


const contentDirectory = path.join(process.cwd(), '_content/projects')

export function getSortedData() {

  const fileNames = fs.readdirSync(contentDirectory)

  const allInformation = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '') 
    const fullPath = path.join(contentDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })
  return allInformation.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getAllIds() {
  const fileNames = fs.readdirSync(contentDirectory)

  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

export async function getDataFromId(id) {
  const idPath = path.join(contentDirectory, `${id}.md`)
  const fileContent = fs.readFileSync(idPath, 'utf8')
  
  const matterResult = matter(fileContent)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}