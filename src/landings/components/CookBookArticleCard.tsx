import { Label, LabelGroup, Link } from '@primer/react'
import { ValidOcticon, getOcticonComponent } from '../lib/octicons'

type IconType = ValidOcticon

type Props = {
  title: string
  icon?: IconType
  url: string
  description: string
  tags: string[]
  spotlight?: boolean
  image?: string
  complexity?: string
}

function setImage(image: string, alt: string) {
  return image ? (
    <img
      src={image}
      alt={alt}
      style={{
        backgroundColor: 'gray',
        marginBottom: 20,
        borderRadius: 5,
        width: '100%',
        height: 'auto',
      }}
    />
  ) : null
}
const spotlightClasses = 'd-flex flex-column align-items-center'
export const CookBookArticleCard = ({
  title,
  icon,
  tags,
  description,
  image = '',
  url,
  spotlight = false,
}: Props) => {
  const IconComponent = getOcticonComponent(icon)
  return (
    <div className="m-2">
      <div
        style={{ minHeight: 200 }}
        className={spotlight ? spotlightClasses : 'd-flex pb-3 border-bottom'}
      >
        {spotlight ? setImage(image, title) : null}
        {spotlight
          ? null
          : IconComponent && (
              <IconComponent
                size={48}
                className="mr-4 bgColor-accent-muted p-3 circle fgColor-accent"
              />
            )}
        <div>
          <h3 className="h4">
            <Link href={url}>{title}</Link>
          </h3>
          <div className="fgColor-muted mb-3 mt-2">{description}</div>
          <LabelGroup>
            {tags.map((tag, index) => (
              <Label key={index} variant="accent" sx={{ mr: 1 }} size="small">
                {tag}
              </Label>
            ))}
          </LabelGroup>
        </div>
      </div>
    </div>
  )
}
