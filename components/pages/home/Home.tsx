import { HomePage } from '@/types/typings'
import ScrollUp from 'components/shared/ScrollUp'

interface IHome {
  data: HomePage
}

export function Home({ data }: IHome) {
  const { overview, title } = data

  return (
    <div className="space-y-20">
      {/* Header */}
      {/* {title && <Header centered title={title} description={overview} />} */}

      {/* Workaround: scroll to top on route change */}
      <ScrollUp />
    </div>
  )
}
