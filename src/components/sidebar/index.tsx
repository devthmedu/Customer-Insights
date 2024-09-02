import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import { Button } from '../ui/button'
import Link from 'next/link'
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent
} from '../ui/tooltip'
import {
  Home,
  LogOut,
  Package,
  PanelBottom,
  Settings2,
  ShoppingBag,
  Users
} from 'lucide-react'

export function Sidebar () {
  return (
    <aside className='fixed inset-y-0 left-0 z-10 w-14 border-r bg-background flex flex-col'>
      <nav className='flex flex-col items-center gap-4 px-2 py-5'>
        <TooltipProvider>
          <Link
            href='#'
            className='flex h-9 w-9 shrink-0 items-center justify-center bg-primary text-primary-foreground rounded-full'
          >
            <Package className='h-4 w-4' />
            <span className='sr-only'>Dashboard Avatar</span>
          </Link>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
                <Home className='h-5 w-5' />
                <span className='sr-only'>Início</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <span>Início</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
                <ShoppingBag className='h-5 w-5' />
                <span className='sr-only'>Pedidos</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <span>Pedidos</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
                <Package className='h-5 w-5' />
                <span className='sr-only'>Produtos</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <span>Produtos</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
                <Users className='h-5 w-5' />
                <span className='sr-only'>Clientes</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <span>Clientes</span>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
                <Settings2 className='h-5 w-5' />
                <span className='sr-only'>Configurações</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <span>Configurações</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className='mt-auto flex-col items-center gap-5 px-2 py-5'>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='#'
                className='flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground'
              >
                <LogOut className='h-5 w-5' />
                <span className='sr-only'>Sair</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <span>Sair</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  )
}
