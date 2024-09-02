import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'

const customerData = {
  name: 'Thomas Eduardo',
  email: 'developer.thomas@outlook.com',
  image: 'https://github.com/devthmedu.png', // Adicionada a vírgula aqui
  recentInteractions: [
    'Acessou a página de produtos',
    'Fez uma compra de R$ 150,00',
    'Deixou uma avaliação positiva',
    'Participou de uma pesquisa'
  ]
}

export function CustomerInteractions () {
  return (
    <Card className='mt-5 shadow-md rounded-lg border border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-700 p-4'>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <CardTitle className='text-lg sm:text-xl font-semibold text-gray-900 dark:text-gray-100'>
            Interações Recentes
          </CardTitle>
        </div>
        <CardDescription className='text-sm text-gray-600 dark:text-gray-400'>
          Atividades recentes do cliente
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className='flex items-start gap-4 border-b border-gray-200 pb-4 dark:border-gray-700'>
          <Avatar className='w-16 h-16 rounded-full overflow-hidden'>
            <AvatarImage
              src={customerData.image}
              className='w-full h-full object-cover'
            />
            <AvatarFallback className='flex items-center justify-center w-full h-full bg-gray-300 text-gray-600'>
              {customerData.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className='flex flex-col justify-center'>
            <p className='text-base font-semibold text-gray-900 dark:text-gray-100'>
              {customerData.name}
            </p>
            <span className='text-sm text-gray-500 dark:text-gray-400'>
              {customerData.email}
            </span>
          </div>
        </div>
        <ul className='mt-4 list-disc pl-5 space-y-2'>
          {customerData.recentInteractions.map((interaction, index) => (
            <li
              key={index}
              className='text-sm text-gray-700 dark:text-gray-300'
            >
              {interaction}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
