'use client';

import { CldUploadButton } from 'next-cloudinary';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

type UploadResult = {
  info: {
    public_id: string;
  };
  event: 'success';
};

export default function GalleryPage() {
  const [imageId, setImageId] = useState<string | null>('');
  return (
    <section>
      <div className='flex justify-between'>
        <h1 className='text-4xl font-bold'>Gallery</h1>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Button asChild>
          <div className='flex gap-2'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-4 h-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
              />
            </svg>

            <CldUploadButton
              onUpload={(result: UploadResult) => {
                // setImageId(result.info.public_id);
              }}
              uploadPreset='dvxn2qft'
            />
          </div>
        </Button>
      </div>
    </section>
  );
}
