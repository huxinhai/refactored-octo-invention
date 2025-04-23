import { createFileRoute } from '@tanstack/react-router'
import {Avatar, Button, Card, Flex, Typography} from "antd";
import {ArrowRightOutlined, DownOutlined} from "@ant-design/icons";
import logo from '@/assets/react.svg'
import svg1 from '@/assets/svg/SVG_副本.svg'
import SVG1 from '@/assets/svg/SVG (1)_副本.svg'
import SVG2 from '@/assets/svg/SVG (2)_副本.svg'
import SVG3 from '@/assets/svg/SVG (3)_副本.svg'
import SVG4 from '@/assets/svg/SVG (4)_副本.svg'
import SVG5 from '@/assets/svg/SVG (5)_副本.svg'
import type * as React from "react";
import svg6 from '@/assets/svg/SVG (6).svg'
import svg611 from '@/assets/svg/SVG (6)11.svg'
import tur1 from '@/assets/svg/SVG (6)1123.svg'
import tur2 from '@/assets/svg/SVG (7).svg'
import tur3 from '@/assets/svg/SVG (8).svg'
import tur4 from '@/assets/svg/SVG (9).svg'
import tur5 from '@/assets/svg/SVG (10).svg'


export const Route = createFileRoute('/')({
  component: HomeComponent
})

const {Title,Text} = Typography


interface FreeListProps {
    children:React.ReactNode
    className?:string
    titleSvg:string
    title:string
    tig:string
}

const freeList:FreeListProps[] = [{
    children: <Flex vertical align={'center'}>
        <img src={svg6} alt={'Upload Audio'} className={'w45 h36'}/>
        <Text>Upload Audio</Text>
    </Flex>,
    titleSvg: svg1,
    title: 'Audio File',
    tig: 'Upload any audio file to transcribe.',
    className:'bg-#fff box-border border-dashed border-[#E5E7EB] border-2'
},{
    children: <Flex justify={'center'} align={'center'} className={'w48 h48 rounded-50% bg-#EF4444'}>
        <img src={SVG4} alt={'Voice Record'} className={'w13 h20'}/>
    </Flex>,
    titleSvg: SVG1,
    title: 'Voice Record',
    tig: 'URecord and transcribe voice.'
},{
    children: <img src={SVG5} alt={'Video Call'} className={'w36 h36'}/>,
    titleSvg: SVG2,
    title: 'Video Call',
    tig: 'Record meeting and calls.',
},{
    children: <Flex className={'w192 h42 py8 pl16 pr9 box-border border-solid border border-[#E5E7EB] rounded-12'} align={'center'} justify={'space-between'}>
        <Text type="secondary">Enter media URL</Text>
        <ArrowRightOutlined  color={'#4F46E5'}/>
    </Flex>,
    titleSvg: SVG3,
    title: 'Import URL',
    tig: 'Import from media URL.',
}]

const FreeList = (props:FreeListProps) => {
    const {children,className,title,titleSvg,tig} = props
    return (
        <Card className={'rounded-20 max-w-320 border-0'} style={{
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.001), rgba(0, 0, 0, 0.001)), #FFFFFF',
            boxShadow: '0px 4px 6px -4px rgba(0, 0, 0, 0.1),0px 10px 15px -3px rgba(0, 0, 0, 0.1)'
        }}>
            {/*<Flex  vertical>*/}
                <Flex gap={16}>
                    <Flex className={'w32 h32 bg-#DBEAFE rounded-50%'} justify={'center'} align={'center'}>
                        <img src={titleSvg} alt={''} className={'w15 h20'}/>
                    </Flex>

                    <Title level={3}>{title}</Title>
                </Flex>
                <Text className={'mt24'}>{tig}</Text>
                <Flex justify={'center'} align={'center'} className={`w265 h112 rounded-16 mt32 mb26 bg-#F9FAFB ${className || ''}`}>
                    {children}
                </Flex>
                <Button type={'primary'} size={'large'} block>Try FREE</Button>
            {/*</Flex>*/}
        </Card>

    )
}


interface turboScribeProps {
    svg:string
    svgCss:string
    title:string
    tig:string
}

const TurboScribeList:turboScribeProps[] = [{
    svg: tur1,
    svgCss: 'bg-#EF4444 bg-opacity-20',
    title: '#1 in Speech to Text Accuracy',
    tig: 'Powered by advanced AI technology, delivering industry-leading accuracy rates of 99.9% across all audio types.'
},{
    svg: tur2,
    svgCss: 'bg-#3B82F6 bg-opacity-20',
    title: '98+ Languages Supported',
    tig: 'Comprehensive support for major world languages, including regional accents and dialects.'
},{
    svg: tur3,
    svgCss: 'bg-#22C55E bg-opacity-20',
    title: 'Real-Time Translation',
    tig: 'Instant translation capabilities for 134+ languages. Transcribe in any language and get immediate English translations.'
},{
    svg: tur4,
    svgCss: 'bg-#A855F7 bg-opacity-20',
    title: 'Advanced Speaker Recognition',
    tig: 'Automatically identifies and labels different speakers in meetings, interviews, and podcasts with high accuracy.'
},{
    svg: tur5,
    svgCss: 'bg-#EAB308 bg-opacity-20',
    title: 'Enterprise-Grade Security',
    tig: 'Bank-level encryption for all files and transcripts. Your data remains private and secure with SOC 2 Type II compliance.'
}]

const TurboScribe = (props:turboScribeProps) => {
    const {svg,svgCss,title,tig} = props
    return (
        <Flex gap={25} align={'center'}>
            <Flex justify={'center'} align={'center'} className={`w48 h48 rounded-12 ${svgCss}`}>
                <img src={svg} alt={title} className={'h24 w-auto'}/>
            </Flex>
            <Flex vertical>
                <Title className={'mb8'} level={4}>{title}</Title>
                <Text>{tig}</Text>
            </Flex>
        </Flex>
    )
}
function HomeComponent() {
  return (
      <>
          <article>
              <title>Transcribe Audio</title>
          </article>
          <main className={'px32'}>
              <header className={'py20'}>
                  <Flex align={'center'} justify={'space-between'}>
                      <Flex align={'center'} gap={32}>
                          <img src={logo} alt={'logo'} className={'mr10'}/>
                          <Text>Tools</Text>
                          <Text>Resources</Text>
                          <Text>Business</Text>
                          <Text>Pricing</Text>
                      </Flex>
                      <Flex gap={16} align={'center'}>
                          <Flex gap={8} align={'center'}>
                              <Text>EN</Text>
                              <DownOutlined className={'text-12'} />
                          </Flex>
                          <Text>Login</Text>
                          <Text className={'px16'}>Schedule a Demo</Text>
                          <Button type={'primary'}>Try it Free</Button>
                      </Flex>
                  </Flex>
              </header>

              <aside className={'mt64'}>
                  <Flex vertical align={'center'}>
                      <Title>Transcribe Audio to Text</Title>
                      <Flex vertical align={'center'}>
                          <Text className={'text-20 text-center'}>Instantly transcribe meetings, interviews, calls, and lectures into precise transcripts—harness</Text>
                          <Text className={'text-20 text-center'}>accurate AI transcription to unlock valuable insights from your conversations. </Text>
                      </Flex>

                      <Flex align={'center'} className={'mt55'} gap={16}>
                          <Text>Transcribe audio to text in 100+ languages</Text>
                          <Avatar.Group>
                              <Avatar size={32} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                              <Avatar size={32} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                              <Avatar size={32} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                              <Avatar size={32} src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                          </Avatar.Group>
                      </Flex>

                      <Text className={'mt30'}>Works with</Text>

                      <Flex gap={24} className={'mt16'}>
                          <img src={'https://picsum.photos/200'} alt={'img'} className={'w57 h32'}/>
                          <img src={'https://picsum.photos/200'} alt={'img'} className={'w57 h32'}/>
                          <img src={'https://picsum.photos/200'} alt={'img'} className={'w57 h32'}/>
                      </Flex>

                      <Flex className={'mt56'} gap={32}>
                          <Button className={'w188 h52'} type={'primary'} size={'large'}>Try for Free</Button>
                          <Button className={'w188 h52'} color={'primary'} variant={'outlined'} size={'large'}>Schedule a Demo</Button>
                      </Flex>
                  </Flex>
                  <Flex wrap className={'mt56'} justify={'center'} gap={27}>
                      {
                          freeList.map((item)=>(
                              <FreeList {...item} key={item.title}/>
                          ))
                      }
                  </Flex>
              </aside>
              <footer className={'mt60 pb64'}>
                  <Flex vertical align={'center'}>
                      <Flex justify={'center'} align={'center'} className={'bg-#2563EB rounded-20px bg-opacity-20 w80 h80'}>
                          <img src={svg611} alt={'Powered by TurboScribe'} className={'w45 h36'}/>
                      </Flex>
                        <Title className={'mt24'}>Powered by TurboScribe</Title>
                        <Text>Transform your audio into text with unmatched accuracy and intelligence </Text>
                  </Flex>

                  <Flex vertical gap={52}  className={'mt60 max-w-800 m-auto'}>
                      {
                         TurboScribeList.map((item) => (
                             <TurboScribe {...item} key={item.title} />
                         ))
                      }

                  </Flex>
                <Flex vertical align={'center'} gap={16}>
                    <Button type={'primary'} size={'large'} className={'mt64'}>Try TurboScribe Free </Button>
                    <Text type="secondary">No credit card required • 30-day free trial</Text>
                </Flex>
              </footer>
          </main>
      </>

  )
}
