import Author from '#app/components/ui/author'
import Background from '#app/components/ui/background'
import Footer from '#app/components/ui/footer'
import Navigation from '#app/components/ui/navigation'
import { useNavigate, useParams } from '@remix-run/react'

interface ShowcaseItem {
  id: number
  name: string
  description: string
  authorImgUrl: string
  portfolioImgUr?: string
  applicationDescription: string
  techstackDescription: string
  techDescription: string
  authorName: string
  link: string
  position: string
}

const portfolio: ShowcaseItem[] = [
  {
    id: 1,
    name: 'アルゴリズムドキュメント（React + P5.js + Manim）',
    description:
      'データ構造や探索・ソートアルゴリズムの概要や計算量をまとめたサイトをReactベースで作成しました。',
    authorImgUrl: '/images/motivation.jpeg',
    portfolioImgUr: '/images/algorithm.png',
    applicationDescription:
      'このアプリケーションは、データ構造や探索・ソートアルゴリズムの概念を可視化し、学習者がより直感的に理解できるように設計されています。Reactを用いてフロントエンドを構築し、P5.jsとManimを使用してアルゴリズムのアニメーションを実現しています。',
    techstackDescription:
      'このアプリケーションの技術スタックには、Reactをメインのフレームワークとして使用し、P5.jsで描画を行い、Manimでアニメーションを作成しています。また、バックエンドにはNode.jsとExpressを使用し、データベースにはMongoDBを採用しています。',
    techDescription:
      'このプロジェクトで直面した技術的な課題には、複雑なアルゴリズムのアニメーションの同期、リアルタイムでのユーザー入力処理、パフォーマンスの最適化などがありました。これらの課題を克服するために、非同期処理やWeb Workerを活用し、効率的な描画アルゴリズムを設計しました。',
    authorName: 'Atsushi Hatakeyama',
    link: 'https://algorithm-visualizer-bqz.pages.dev/',
    position: 'Full stack developer',
  },
]

const PortfolioDetail = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()

  const item = portfolio.find((item) => item.id === Number(id))

  if (!item) {
    return <div>Item not found</div>
  }

  const handleAuthorClick = (id: number) => {
    navigate(`/author/${id}`)
  }

  return (
    <div className="flex h-full flex-col">
      {/* Navigation */}
      <Navigation />
      <div className="z-10 flex min-h-screen flex-col items-center text-black dark:text-white">
        <div className="w-full max-w-4xl p-4">
          <div className="mb-8">
            {/* Title */}
            <h1 className="mb-2 text-4xl font-bold">{item.name}</h1>
            <p className="mb-4">{item.description}</p>
            {/* Author */}
            <div className="cursor-pointer" onClick={() => handleAuthorClick(item.id)}>
              <Author
                imageUrl={item.authorImgUrl}
                authorName={item.authorName}
                position={item.position}
              />
            </div>
            {/* Main contents */}
            <img
              className="mb-8 h-auto w-full"
              src={item.portfolioImgUr}
              alt={item.name}
            />
            <h2 className="mb-2 font-bold">アプリケーションについて</h2>
            <p className="mb-8 text-justify">{item.applicationDescription}</p>
            <h2 className="mb-2 font-bold">テックスタック</h2>
            <p className="mb-8 text-justify">{item.techstackDescription}</p>
            <h2 className="mb-2 font-bold">技術コメント</h2>
            <p className="mb-8 text-justify">{item.techDescription}</p>
            <h2 className="mb-2 font-bold">リンク</h2>
            <p className="mb-8 text-justify">
              <a
                href={item.link}
                className="text-blue-500 underline"
                target="_blank"
                rel="noopener noreferrer">
                {item.link}
              </a>
            </p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer />
      {/* Background */}
      <Background />
    </div>
  )
}

export default PortfolioDetail
