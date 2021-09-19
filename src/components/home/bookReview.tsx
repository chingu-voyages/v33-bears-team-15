import Image from 'next/image';
import Container from '~/components/ui/container';
import Button from '~/components/ui/button';
import Link from '~/components/common/link';

export default function BookReview() {
  return (
    <section className="pt-20 pb-16">
      <Container className="md:justify-center flex lg:flex-row flex-col-reverse">
        <div className="xl:px-24 lg:px-16 w-full lg:w-1/2 flex justify-center lg:mt-0 mt-12">
          <Image
            src="https://imgv2-1-f.scribdassets.com/img/word_document/326366193/original/216x287/82e1448573/1631951856?v=1"
            alt="News of the World: A Novel"
            height="675"
            width="500"
          />
        </div>
        <div className="sm:pl-16 pl-0 w-full lg:w-1/2 ">
          <p className="uppercase font-semibold text-lg pb-5 lg:mt-24">Book Review</p>
          <h2 className="text-6xl text-green-500 dark:text-green-400 pb-6 font-semibold">
            News of the World: A Novel
          </h2>
          <p className="text-xl font-semibold">
            Captain Jefferson Kyle Kidd travels through Texas after the Civil War,
            offering live readings from newspapers to paying audiences to share with them
            the latest news. A widower and a veteran of two wars, Kidd finds peace in his
            solitary life. While in Wichita Falls, a Kiowa tribe offers him a $50 gold
            piece to reunite a 10-year-old girl with her family in San Antonio. Years ago,
            a group of Kiowa raiders killed her parents and sister, but they spared her
            life and raised her. Now, her life is upended a second time as she is sent to
            her aunt and uncle.
          </p>
          <p className="text-2xl py-5 font-semibold text-gray-600 dark:text-gray-50">
            by Paulette Jiles
          </p>
          <Button variant="outlined" size="normal" as={Link} href="/library">
            Start Reading Now
          </Button>
        </div>
      </Container>
    </section>
  );
}
