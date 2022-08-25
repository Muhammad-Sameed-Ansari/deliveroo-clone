import sanityClient from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

const client = sanityClient({
    projectId: 's381irqs',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-10-21'
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)

// RUN THIS to add exception for localhost CORS policy
// sanity cors add http://localhost:3333 
// sanity cors add http://192.168.100.54:19000

export default client