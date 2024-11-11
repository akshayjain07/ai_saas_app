import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm';
import { transformationTypes } from '@/constants'
import { getUserById } from '@/lib/actions/user.actions';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const Report_found = async ({ params: { type } }: SearchParamProps) => {
  const { userId } = auth();
  const transformation = transformationTypes[type];

  if(!userId) redirect('/sign-in')

  const user = await getUserById(userId);

  return (
    <>
      <Header 
        title={transformationTypes.restore.title}
        subtitle={transformationTypes.restore.title}
      />
    
      <section className="mt-10">
        <TransformationForm 
          action="Add"
          userId={user._id}
          type={transformationTypes.restore.type as TransformationTypeKey}
          // creditBalance={user.creditBalance}
        />
      </section>
    </>
  )
}

export default Report_found

// import React from 'react'

// const Report_found = () => {
//   return (
//     <div>Report_found</div>
//   )
// }

// export default Report_found