import Link from 'next/link'

export default async function Post({ post }) {
    const posts = [
        {
            "createdAt": "2024-12-13T04:04:14.947Z",
            "name": "Levi Kassulke",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/986.jpg",
            "id": "1"
        },
        {
            "createdAt": "2024-12-12T08:23:03.196Z",
            "name": "Miss Ed Collier",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1070.jpg",
            "id": "2"
        },
        {
            "createdAt": "2024-12-12T08:25:10.791Z",
            "name": "Carmen Mosciski",
            "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/927.jpg",
            "id": "3"
        }
    ]

    return (
        <ul>
            {posts.map((post) => (
                <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </li>
            ))}
        </ul>
    )
}