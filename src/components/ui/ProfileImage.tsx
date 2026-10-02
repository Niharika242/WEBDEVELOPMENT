import { useState } from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  name: string;
  className?: string;
}

export default function ProfileImage({ src, alt, name, className = '' }: ProfileImageProps) {
  const [hasImage, setHasImage] = useState(true);
  const initials = name.split(/\s+/).map((part) => part.charAt(0)).join('').slice(0, 2);

  return (
    <figure className={`profile-image ${className}`}>
      {hasImage ? (
        <img
          src={src}
          alt={alt}
          width={540}
          height={720}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          onError={() => setHasImage(false)}
        />
      ) : (
        <div className="profile-image__fallback" role="img" aria-label={`Professional portrait of ${name} will be added here`}>
          <span className="profile-image__initials" aria-hidden="true">{initials}</span>
          <span className="profile-image__fallback-label mono">OWNER’S PORTRAIT<br />TO BE ADDED</span>
        </div>
      )}
      <figcaption className="profile-image__caption mono">
        <span>{name}</span>
        <span>SOFTWARE ENGINEER&nbsp; / &nbsp;HYDERABAD</span>
      </figcaption>
    </figure>
  );
}
