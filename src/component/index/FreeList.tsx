import { Button, Card, Flex, Typography } from 'antd'
import { indexCard } from '@/styles/index.css.ts'
import type * as React from 'react'

export interface FreeListProps {
  children: React.ReactNode
  className?: string
  titleSvg: string
  title: string
  tig: string
}
const { Title, Text } = Typography
const FreeList = (props: FreeListProps) => {
  const { children, className, title, titleSvg, tig } = props
  return (
    <Card className={`rounded-20 max-w-320 border-0 ${indexCard}`}>
      {/*<Flex  vertical>*/}
      <Flex gap={16}>
        <Flex
          className={'w32 h32 bg-#DBEAFE rounded-50%'}
          justify={'center'}
          align={'center'}
        >
          <img src={titleSvg} alt={''} className={'w15 h20'} />
        </Flex>
        <Title level={3}>{title}</Title>
      </Flex>
      <Text className={'mt24'}>{tig}</Text>
      <Flex
        justify={'center'}
        align={'center'}
        className={`w265 h112 rounded-16 mt32 mb26 bg-#F9FAFB ${className || ''}`}
      >
        {children}
      </Flex>
      <Button type={'primary'} size={'large'} block>
        Try FREE
      </Button>
      {/*</Flex>*/}
    </Card>
  )
}

export default FreeList
