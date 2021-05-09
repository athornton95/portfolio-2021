import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/solid';
import { FolderIcon } from '@heroicons/react/outline';

const Card = (props) => {
  const { title, description, tech, company, github, website } = props;

  const companyAttr = company ? `Made at: ${company}` : 'Personal Project';
  console.log(website);

  return (
    <div className='bg-bgSecondary p-8 pb-6 rounded-lg'>
      <div className='flex flex-col'>
        <div className='flex justify-between pb-4'>
          <div>
          <FolderIcon className='h-8 w-8 text-textTertiary inline self-start'/>
          </div>
          {(github || website) && (
            <div>
              {github && (
                <a href={`${github}`} target='_blank' rel="noopener noreferrer">
                  <CodeIcon className='h-8 w-8 text-textPrimary inline pl-2'/>
                </a>
              )}
              {website && (
                <a href={`${website}`} target='_blank' rel="noopener noreferrer">
                  <ExternalLinkIcon className='h-8 w-8 text-textPrimary inline pl-2'/>
                </a>
              )}
            </div>
          )}
        </div>
        {title && <p className='font-display text-lg font-semibold text-textSecondary pb-4'>{title}</p>}
        {description && <p className='font-display text-textTertiary text-sm pb-4'>{description}</p>}
        {companyAttr && (
          <div className='font-display text-textTertiary text-sm pb-4' >
            <p className='inline'>{companyAttr}</p>
          </div>
        )}
        {tech && (
          <ul className='text-xs font-title text-textPrimary flex flex-wrap'>
            {tech.map(item => <li className='inline pr-2 pb-2' key={item}>{item}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Card;
