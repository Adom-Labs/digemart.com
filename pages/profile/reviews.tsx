import AppLayout from '@/components/main/layout/AppLayout';
import DashboardLayout from '@/components/main/layout/DashboardLayout';
import ReviewItem, { ReviewType } from '@/components/main/reviews/ReviewItem';
import ReviewModal from '@/components/main/reviews/ReviewModal';
import SectionHeading from '@/components/shared/SectionHeading';
import WrapContent from '@/components/shared/WrapContent';
import React, { useState } from 'react';

const reviews = [
  {
    id: 'abc123',
    product_name: 'Laptop jdkj fidkfdjdf fifkfjf ijjji',
    delivered_on: '2023-11-01',
    order_id: 'Order#12345',
    image: 'https://source.unsplash.com/featured/?laptop',
  },
  {
    id: 'def456',
    product_name: 'Smartphone',
    delivered_on: '2023-11-02',
    order_id: 'Order#67890',
    image: 'https://source.unsplash.com/featured/?smartphone',
  },
  {
    id: 'ghi789',
    product_name: 'Headphones',
    delivered_on: '2023-11-03',
    order_id: 'Order#54321',
    image: 'https://source.unsplash.com/featured/?headphones',
  },
  {
    id: 'jkl012',
    product_name: 'Camera',
    delivered_on: '2023-11-04',
    order_id: 'Order#98765',
    image: 'https://source.unsplash.com/featured/?camera',
  },
  {
    id: 'mno345',
    product_name: 'Tablet',
    delivered_on: '2023-11-05',
    order_id: 'Order#23456',
    image: 'https://source.unsplash.com/featured/?tablet',
  },
  {
    id: 'pqr678',
    product_name: 'Fitness Tracker',
    delivered_on: '2023-11-06',
    order_id: 'Order#87654',
    image: 'https://source.unsplash.com/featured/?fitnesstracker',
  },
  {
    id: 'stu901',
    product_name: 'Gaming Console',
    delivered_on: '2023-11-07',
    order_id: 'Order#43210',
    image: 'https://source.unsplash.com/featured/?gamingconsole',
  },
];

function Reviews() {
  const [current, SetCurrent] = useState<ReviewType | null>(null);
  const OpenReviewModal = (review: ReviewType) => {
    SetCurrent(review);
    let modal = document.getElementById('review-modal') as HTMLDialogElement;
    modal.showModal();
  };
  return (
    <AppLayout title='Reviews | Digemart account page'>
      <DashboardLayout>
        <WrapContent>
          <SectionHeading>Reviews</SectionHeading>
          <div className='grid grid-cols-1 lg:grid-cols-2 pt-5 gap-8'>
            {reviews.map((review) => {
              return (
                <ReviewItem
                  key={review.id}
                  review={review}
                  openModal={OpenReviewModal}
                />
              );
            })}
          </div>
          <ReviewModal review={current} />
        </WrapContent>
      </DashboardLayout>
    </AppLayout>
  );
}

export default Reviews;
