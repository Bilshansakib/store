import React from 'react';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import Markdown from '@/components/Markdown';
import ReviewList from '@/components/CustomReviews/ReviewList';
import AddReviewForm from '@/components/CustomReviews/AddReviewForm';
import ReviewRatings from '@/components/CustomReviews/ReviewRatings';

export default function ReviewSection({
  data,
}: {
  data: {
    _id: string;
    images: string[];
    title: string;
    slug: string;
    discount: number;
    avgRating: number;
    originalPrice: number;
    price: number;
    description: string;
    review: string;
    Avator: string[];
    AvatarImage: any;
    name: string;
  };
}) {
  const [tabName, setTabName] = React.useState('description');

  const [progress, setProgress] = React.useState(13)
 
  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="my-32">
      <div>
        <Tabs defaultValue="description">
          <div className="tabs flex gap-8 border-b">
            <button
              onClick={() => setTabName('description')}
              className={`${tabName === 'description' && 'border-b-2 border-violet-600  text-violet-600'} pb-8 text-lg `}
            >
              Description
            </button>
            <button
              onClick={() => setTabName('review')}
              className={`${tabName === 'review' && 'border-b-2 border-violet-600  text-violet-600'} pb-8 text-lg `}
            >
              Reviews (1)
            </button>
          </div>
          <TabsContent value={tabName}>
            <div className="prose mt-8 max-w-3xl font-light">
              <Markdown markdownText={data?.description} />
            </div>
          </TabsContent>
          <TabsContent value={tabName}>
            <div className="prose mt-8 max-w-3xl font-light">
              <Markdown markdownText={data?.description} />
            </div>
            {/* <Card>
              <CardHeader>
                <CardTitle>Password</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="current">Current password</Label>
                  <Input id="current" type="password" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="new">New password</Label>
                  <Input id="new" type="password" />
                </div>
              </CardContent>
              <CardFooter>
                <Button>Save password</Button>
              </CardFooter>
            </Card> */}
          </TabsContent>
        </Tabs>
        <Tabs defaultValue="review">
          <TabsContent value="review">
            
            <div className="flex flex-wrap items-start gap-32">
              <div className="flex max-w-sm gap-4 prose">
                <div>
                <h4 data-v-14a43bd0="" className="font-semibold text-2xl text-gray-900">Customer Reviews</h4>
                <ReviewRatings>{' '}</ReviewRatings>
                <AddReviewForm>{' '}</AddReviewForm>
                </div>

              
                
              </div>
              <div className='flex-1'>
                {/* review list */}
                <ReviewList>{' '}</ReviewList>
                
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
