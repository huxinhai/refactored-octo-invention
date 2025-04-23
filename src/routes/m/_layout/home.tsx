import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/m/_layout/home')({
  component: RouteComponent
})

function RouteComponent() {
  return <div>Hello "/m/home"!</div>
}
