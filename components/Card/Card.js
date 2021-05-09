import { ExternalLinkIcon, CodeIcon } from '@heroicons/react/solid';

const Card = (props) => {
  const { title, description, tech, company, github, website } = props;
  const companyAttr = company ? `Made at: ${company}` : 'Personal Project';

  return (
    <div className='bg-bgSecondary p-8 pb-6 rounded-lg'>
      <div className='flex flex-col'>
        <div className='flex justify-between pb-4'>
          {title && <p className='font-display inline text-lg font-semibold text-textSecondary'>{title}</p>}
          <div>
            {(github || website) && (
              <>
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
              </>
            )}
          </div>
        </div>
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
