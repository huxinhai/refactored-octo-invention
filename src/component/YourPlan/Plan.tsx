import { Button, Card, Flex, Tag, Typography } from 'antd'
import type * as React from 'react'
import PlanItem, { type PlanItemProps } from '@/component/YourPlan/PlanItem.tsx'

const { Title, Text } = Typography

export interface PlanProps {
  item: PlanItemProps[]
  title: string
  tig1: string
  tig2: string
  tig3?: string
  but: string
  tag?: string
  bg: string
}

const Plan = (props: PlanProps) => {
  const { title, item, but, tig1, tig2, tig3, tag, bg } = props
  return (
    <div className={'relative'}>
      {!tag || (
        <div className={'absolute z-1 -top-7 left-25'}>
          <Tag color="#34D399" className={'rounded-99999'}>
            {tag}
          </Tag>
        </div>
      )}

      <Card className={`border-0 rounded-16 min-w-350 ${bg}`}>
        <Flex vertical>
          <Title className={'mb20'} level={5}>
            {title}
          </Title>
          <Title className={'m0'}>{tig1}</Title>
          <Text className={'text-16 font300'}>{tig2}</Text>
          <Flex style={{ opacity: +!!tig3 }} align={'center'} gap={20}>
            <Text>{tig3 || '$60 billed yearly '}</Text>
            <Tag color="#34D399">LOWEST EVER!!</Tag>
          </Flex>

          <Flex vertical className={'mt20'} gap={24}>
            {item.map((item) => (
              <PlanItem key={item.title} {...item} />
            ))}
          </Flex>
          <Button
            className={'mt46'}
            size={'large'}
            style={
              { '--ant-button-default-color': '#000' } as React.CSSProperties
            }
            block
          >
            {but}
          </Button>
        </Flex>
      </Card>
    </div>
  )
}

export default Plan
