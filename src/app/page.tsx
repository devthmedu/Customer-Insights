import { ChartOverview } from '@/components/chart'
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import { Sales } from '@/components/sales'
import { CustomerInteractions } from '@/components/CustomerInteractions'
import { ChartLegend } from '@/components/ui/chart'
import {
  DollarSign,
  Percent,
  User2,
  Package,
  ShoppingBag,
  BarChart,
  ArrowUpCircle,
  Globe,
  Calendar,
  Clock,
  TrendUp,
  TrendingUp
} from 'lucide-react'


export default function Home () {
  return (
    <main className='flex-1 p-4 sm:ml-14'>
      <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
        {/* Existing Cards */}
        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Total de Vendas
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4 text-green-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Total de vendas em 90 dias
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                R$ 50.000,00
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Novos Clientes
              </CardTitle>
              <User2 className='ml-auto w-4 h-4 text-blue-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Novos clientes em 30 dias
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                434
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Pedidos Hoje
              </CardTitle>
              <Percent className='ml-auto w-4 h-4 text-yellow-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Quantidade de pedidos
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>50</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Produtos em Estoque
              </CardTitle>
              <Package className='ml-auto w-4 h-4 text-purple-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Quantidade de produtos em estoque
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                120
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Vendas Mensais
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4 text-green-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Total de vendas no último mês
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                R$ 15.000,00
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Pedidos Pendentes
              </CardTitle>
              <ShoppingBag className='ml-auto w-4 h-4 text-red-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Pedidos que ainda não foram processados
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>12</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Receita Diária
              </CardTitle>
              <DollarSign className='ml-auto w-4 h-4 text-green-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Receita média diária
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                R$ 2.000,00
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Taxa de Conversão
              </CardTitle>
              <Percent className='ml-auto w-4 h-4 text-yellow-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Percentual de conversão de visitantes em clientes
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>8%</p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Visitas ao Site
              </CardTitle>
              <Globe className='ml-auto w-4 h-4 text-blue-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Número de visitas ao site no último mês
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                1.200
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Crescimento Anual
              </CardTitle>
              <ArrowUpCircle className='ml-auto w-4 h-4 text-teal-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Percentual de crescimento anual
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                12%
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        {/* New Cards */}
        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Total de Leads
              </CardTitle>
              <BarChart className='ml-auto w-4 h-4 text-orange-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Total de leads capturados no último mês
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                350
              </p>
            </CardContent>
          </CardHeader>
        </Card>

        <Card className='bg-white shadow-lg border rounded-lg'>
          <CardHeader>
            <div className='flex items-center'>
              <CardTitle className='text-lg sm:text-xl text-gray-800 select-none'>
                Taxa de Retenção
              </CardTitle>
              <TrendingUp className='ml-auto w-4 h-4 text-teal-500' />
            </div>
            <CardDescription className='text-sm text-gray-600'>
              Percentual de retenção de clientes
            </CardDescription>
            <CardContent>
              <p className='text-base sm:text-lg font-bold text-gray-900'>
                90%
              </p>
            </CardContent>
          </CardHeader>
        </Card>
      </section>

      <section className='mt-4 flex flex-col md:flex-row gap-4'>
        <ChartOverview />
        <Sales />
        <CustomerInteractions />
      </section>
    </main>
  )
}
