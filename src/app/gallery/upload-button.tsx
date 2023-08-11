'use client';

import { CldUploadButton } from 'next-cloudinary';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

type UploadResult = {
  info: {
    public_id: string;
  };
  event: 'success';
};

export default function UploadButton() {
  const router = useRouter();

  return (
    <Button asChild>
      <CldUploadButton
        uploadPreset='dvxn2qft'
        onUpload={(result: UploadResult) => {
          // setImageId(resu
          // defer this function by a function so that the image will be displayed
          setTimeout(() => {
            router.refresh();
          }, 1000);
        }}
      >
        <div className='flex gap-2 items-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-4 h-4 stroke-slate-900'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
            />
          </svg>
          Upload
        </div>
      </CldUploadButton>
    </Button>
  );
}
