import { createFileRoute } from '@tanstack/react-router'
import { Card, ConfigProvider, Flex, Switch, Tag, Typography } from 'antd'
import plan1 from '@/assets/svg/SVG (6)1.svg'
import plan2 from '@/assets/svg/SVG (7)1.svg'
import plan3 from '@/assets/svg/SVG (8)1.svg'
import plan4 from '@/assets/svg/SVG (9)1.svg'
import plan5 from '@/assets/svg/SVG (10)1.svg'
import plan6 from '@/assets/svg/SVG (11).svg'
import plans1 from '@/assets/svg/SVGplans.svg'
import plans2 from '@/assets/svg/SVGplans (1).svg'
import plans3 from '@/assets/svg/SVGplans (2).svg'
import plans4 from '@/assets/svg/SVGplans (3).svg'
import Plan, { type PlanProps } from '@/component/YourPlan/Plan.tsx'

export const Route = createFileRoute('/YourPlan')({
  component: RouteComponent
})

const { Title, Text } = Typography

const PlanList: PlanProps[] = [
  {
    item: [
      {
        icon: plan1,
        title: '3 Transcripts Daily',
        description: 'Transcribe 3 files for free every day',
        iconCss: 'w11 w16',
        ml: 'ml21'
      },
      {
        icon: plan2,
        title: '30 Minute Uploads',
        description: 'Each file can be up to 30 minutes long',
        iconCss: 'w16 w16',
        ml: 'ml26'
      },
      {
        icon: plan3,
        title: 'Basic Priority',
        description: 'Standard processing time for your files',
        iconCss: 'w12 w16',
        ml: 'ml22'
      }
    ],
    title: 'Free Plan',
    tig1: 'Free',
    tig2: '100% Free',
    but: 'Current Plan ',
    bg: 'bg-#4B5563'
  },
  {
    item: [
      {
        icon: plan4,
        title: 'Unlimited Transcriptions',
        description: 'No limits on transcription volume',
        iconCss: 'w20 h16',
        ml: 'ml30',
        descriptionCss: 'text-#E5E7EB'
      },
      {
        icon: plan5,
        title: '10 Hour Uploads',
        description: 'Each file up to 10 hours / 5GB',
        iconCss: 'w20 h16',
        ml: 'ml30',
        descriptionCss: 'text-#E5E7EB'
      },
      {
        icon: plan6,
        title: 'Priority Processing',
        description: 'Faster processing times',
        iconCss: 'w16 h16',
        ml: 'ml26',
        descriptionCss: 'text-#E5E7EB'
      }
    ],
    title: 'Pro Plan',
    tig1: '$5',
    tig2: 'per month',
    tig3: '$60 billed yearly ',
    but: 'Go Pro ',
    bg: 'bg-#4F46E5',
    tag: 'Most Popular'
  }
]

interface PlansIncludeProps {
  svg: string
  title: string
  description: string
}

const PlansIncludeList: PlansIncludeProps[] = [
  {
    svg: plans1,
    title: 'Security First',
    description: 'Enterprise-grade security and encryption'
  },
  {
    svg: plans2,
    title: '99.9% Uptime',
    description: 'Reliable service you can count on'
  },
  {
    svg: plans3,
    title: '24/7 Support',
    description: 'Help whenever you need it'
  },
  {
    svg: plans4,
    title: 'Regular Updates',
    description: 'Continuous improvements'
  }
]

const PlansInclude = (props: PlansIncludeProps) => {
  const { svg, title, description } = props
  return (
    <Card
      className={'border-0 max-w-202'}
      style={{
        boxShadow: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)'
      }}
    >
      <Flex vertical align={'center'}>
        <img src={svg} alt={title} className={'w-auto h24'} />
        <Title className={'mt16'} level={5}>
          {title}
        </Title>
        <Text className={'mt8 text-center'} type={'secondary'}>
          {description}
        </Text>
      </Flex>
    </Card>
  )
}

function RouteComponent() {
  return (
    <>
      <article>
        <title>Choose Your Plan</title>
      </article>
      <main
        className={'py80 px32'}
        style={{
          background: 'rgb(248,250,252)'
        }}
      >
        <Flex vertical align={'center'}>
          <Title>Choose Your Plan</Title>
          <Text type="secondary">Select the perfect plan for your needs</Text>
        </Flex>
        <Flex className={'mt35'} align={'center'} justify={'center'} gap={12}>
          <Text>Monthly</Text>
          <Switch />
          <Text>Yearly</Text>
          <Tag color="#34D399">LOWEST !!</Tag>
        </Flex>

        <ConfigProvider
          theme={{
            token: {
              colorText: '#fff'
            }
          }}
        >
          <Flex
            className={'mt35 gap-col-30px gap-row-15px'}
            justify={'center'}
            wrap
          >
            {PlanList.map((item) => (
              <Plan {...item} key={item.title} />
            ))}
          </Flex>
        </ConfigProvider>

        <Flex vertical justify={'center'} align={'center'} className={'mt50'}>
          <Title className={'mb32'} level={3}>
            All Plans Include
          </Title>
          <Flex wrap gap={32} justify={'center'}>
            {PlansIncludeList.map((item) => (
              <PlansInclude {...item} key={item.title} />
            ))}
          </Flex>
        </Flex>
      </main>
    </>
  )
}
