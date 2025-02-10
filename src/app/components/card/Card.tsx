/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import Link from 'next/link';

// type CardProps = React.ComponentProps<typeof Card>;

interface Tool {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  name: string;
}

interface CardProps {
  title: string;
  description: string;
  tools: Tool[]; // Updated from any to Tool[] for type safety
  id: number;
  linkDemo: string;
  linkRepo: string;
  className?: string;
}

const CardComponent = ({
  title,
  description,
  tools,
  id,
  linkDemo,
  linkRepo,
  className,
}: CardProps) => {
  return (
    <div className={`mt-6 w-full sm:w-80 lg:w-96 h-80 ${className}`}>
      <Card className="h-full flex flex-col">
        <CardHeader>
          <h3 className="text-left font-medium">{title}</h3>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow">
          <div>
            <div className="text-left">
              <div key={id} className="mb-4">
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          </div>
          <div className="flex-grow mt-auto">
            <div className="flex gap-2">
              <TooltipProvider key={id}>
                {tools.map((tool) => (
                  <Tooltip key={tool.name}>
                    <TooltipTrigger>
                      <tool.icon width={20} height={25} />{' '}
                    </TooltipTrigger>
                    <TooltipContent className="text-center w-full">
                      <p>{tool.name}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </CardContent>
        <CardFooter className="gap-x-3 mt-auto">
          <Button className="w-full hover:bg-white hover:text-black hover:outline outline-1 dark:text-white dark:bg-transparent dark:hover:bg-white dark:hover:text-black dark:outline dark:outline-1 dark:outline-white">
            <Link href={`${linkDemo}`}>View Demo</Link>
          </Button>
          <Button className="button-repo w-full bg-transparent text-black outline outline-1 hover:bg-zinc-950 hover:text-white dark:text-black dark:bg-white dark:hover:bg-transparent dark:hover:text-white dark:outline dark:outline-1 dark:outline-white">
            <Link href={`${linkRepo}`}>View Repo</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardComponent;
