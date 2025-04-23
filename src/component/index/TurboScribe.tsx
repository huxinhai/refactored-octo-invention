import { Flex, Typography } from 'antd'

const { Title, Text } = Typography

export interface turboScribeProps {
  svg: string
  svgCss: string
  title: string
  tig: string
}

const TurboScribe = (props: turboScribeProps) => {
  const { svg, svgCss, title, tig } = props
  return (
    <Flex gap={25} align={'center'}>
      <Flex
        justify={'center'}
        align={'center'}
        className={`w48 h48 rounded-12 ${svgCss}`}
      >
        <img src={svg} alt={title} className={'h24 w-auto'} />
      </Flex>
      <Flex vertical>
        <Title className={'mb8'} level={4}>
          {title}
        </Title>
        <Text>{tig}</Text>
      </Flex>
    </Flex>
  )
}

export default TurboScribe
