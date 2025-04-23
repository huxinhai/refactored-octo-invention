import { Flex, Typography } from 'antd'

const { Text } = Typography

export interface PlanItemProps {
  icon: string
  title: string
  description: string
  iconCss: string
  ml: string
  descriptionCss?: string
}

const PlanItem = (props: PlanItemProps) => {
  const { icon, title, description, iconCss, ml, descriptionCss } = props
  return (
    <div>
      <Flex gap={12} align={'center'}>
        <img src={icon} className={iconCss} alt={title} />
        <Text className={'text-16'}>{title}</Text>
      </Flex>
      <div className={ml}>
        <Text className={descriptionCss || 'text-#9CA3AF'}>{description}</Text>
      </div>
    </div>
  )
}

export default PlanItem
