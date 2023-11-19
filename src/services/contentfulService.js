import { documentToHtmlString } from "@contentful/rich-text-html-renderer"

const contentful = require('contentful')

const client = contentful.createClient({
  space: 'e2octoytiv3u',
  environment: 'master', // defaults to 'master' if not set
  accessToken: 'iXZtL54HUFDU22RmbZ6HutcxqPT6N-1S9ckkjhR9gFo'
})

class ContentfulService {

  async getEntries() {
    try {
      const entries = await client.getEntries()
      return entries
    } catch (err) {
      console.error(err)
      return err
    }
  }

  async getEntry({ id }) {
    try {
      const entry = await client.getEntry(id)
      // @ts-ignore
      const {
        fields: {
          body = {}
        } = {}
      } = entry || {}
      const bodyString = documentToHtmlString(body)
      return {
        ...entry,
        fields: {
          ...entry.fields,
          body: bodyString
        }
      }
    } catch (error) {
      console.error(error)
      return { error: true, message: error.message }
    }
  }

}

export const contentfulService = new ContentfulService()