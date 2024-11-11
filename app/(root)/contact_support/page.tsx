import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes, header } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const Contact_support = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if(!userId) redirect('/sign-in')

  const user = await getUserById(userId);

  return (
    <>
      <Header 
        title={header.contact_support.title}
        subtitle={header.contact_support.subtitle}
      />
    
      {/* <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={user._id}
          type={transformationTypes.restore.type as TransformationTypeKey}
          // creditBalance={user.creditBalance}
        /> */}
      {/* </section> */}
    </>
  )
}

export default Contact_support