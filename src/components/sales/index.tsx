import { CircleDollarSign } from 'lucide-react'
import {
  Card,
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

export function Sales () {
  const clients = [
    {
      name: 'Thomas Eduardo',
      email: 'developer.thomas@outlook.com',
      image: 'https://github.com/devthmedu.png'
    },
   {
    name: 'Ana Souza',
    email: 'ana.souza@gmail.com',
    image: 'https://i.pravatar.cc/150?img=1' // Imagem fictícia
  },
  {
    name: 'Carlos Silva',
    email: 'carlos.silva@outlook.com',
    image: 'https://i.pravatar.cc/150?img=2' // Imagem fictícia
  },
  {
    name: 'Juliana Costa',
    email: 'juliana.costa@gmail.com',
    image: 'https://i.pravatar.cc/150?img=3' // Imagem fictícia
  }
]

  return (
    <Card className='bg-white shadow-lg rounded-lg p-4'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-lg sm:text-xl text-gray-800 font-semibold'>
            Últimos Clientes
          </CardTitle>
          <CircleDollarSign className='w-6 h-6 text-green-500' />
        </div>
        <CardDescription className='text-sm text-gray-600'>
          Novos clientes nas últimas 24 horas
        </CardDescription>
      </CardHeader>

      <CardContent className='mt-4'>
        {clients.map((client, index) => (
          <article
            key={index}
            className={`flex items-center gap-4 py-2 ${
              index < clients.length - 1 ? 'border-b border-gray-200' : ''
            }`}
          >
            <Avatar className='w-12 h-12 rounded-full overflow-hidden'>
              <AvatarImage
                src={client.image}
                alt={`${client.name} Avatar`}
                className='w-full h-full object-cover'
              />
              <AvatarFallback className='flex items-center justify-center w-full h-full text-gray-500 bg-gray-200 rounded-full'>
                {client.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className='text-base font-semibold text-gray-900'>
                {client.name}
              </p>
              <span className='text-sm text-gray-500'>{client.email}</span>
            </div>
          </article>
        ))}
      </CardContent>
    </Card>
  )
}
