import { createFileRoute, Outlet } from '@tanstack/react-router'
import { Layout } from 'antd'

export const Route = createFileRoute('/m/_layout')({
  component: RouteComponent
})

const { Content, Footer } = Layout

function RouteComponent() {
  return (
    <Layout>
      <Content>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  )
}
