import Author from '#app/components/ui/author'
import Footer from '#app/components/ui/footer'
import Navigation from '#app/components/ui/navigation'
import { useParams } from '@remix-run/react'

interface ShowcaseItem {
  id: number
  name: string
  description: string
  imageUrl: string
  applicationDescription: string
  techstackDescription: string
  techDescription: string
  authorName: string
  position: string
}

const portfolio: ShowcaseItem[] = [
  {
    id: 1,
    name: 'アルゴリズムドキュメント（React + P5.js + Manim）',
    description:
      'データ構造や探索・ソートアルゴリズムの概要や計算量をまとめたサイトをReactベースで作成しました。',
    imageUrl: '/images/motivation.jpeg',
    applicationDescription:
      'Body text for your whole article or post. We’ll put in some lorem ipsum to show how a filled-out page might look.',
    techstackDescription: 'Tech stack',
    techDescription: 'Tech stack',
    authorName: 'Atsushi Hatakeyama',
    position: 'Full stack developer',
  },
]

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>()

  const item = portfolio.find((item) => item.id === Number(id))

  if (!item) {
    return <div>Item not found</div>
  }

  return (
    <>
      {/* Navigation */}
      <Navigation />
      <div className="flex min-h-screen flex-col items-center bg-white text-black dark:bg-black dark:text-white">
        <div className="w-full max-w-4xl p-4">
          <div className="mb-8">
            {/* Title */}
            <h1 className="mb-2 text-4xl font-bold">{item.name}</h1>
            <p className="mb-4 text-gray-600">{item.description}</p>
            {/* Author */}
            <Author
              imageUrl={item.imageUrl}
              authorName={item.authorName}
              position={item.position}
            />
            {/* Main contents */}
            <img className="mb-8 h-auto w-full" src={item.imageUrl} alt={item.name} />
            <h2 className="mb-2 font-bold">アプリケーションについて</h2>
            <p className="mb-8 text-justify">{item.applicationDescription}</p>
            <h2 className="mb-2 font-bold">テックスタック</h2>
            <p className="mb-8 text-justify">{item.techstackDescription}</p>
            {/* <div className="grid grid-cols-2 gap-4">
              <img className="h-auto w-full" src={item.imageUrl} alt="extra image 1" />
              <img className="h-auto w-full" src={item.imageUrl} alt="extra image 2" />
            </div> */}
            <h2 className="mb-2 font-bold">技術コメント</h2>
            <p className="mt-8 text-justify">{item.techDescription}</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
    </>
  )
}

export default PortfolioDetail
