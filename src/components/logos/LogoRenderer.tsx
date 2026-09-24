import React from 'react';
import { EGovAfricaLogo } from './EGovAfricaLogo';
import { VerditraLogo } from './VerditraLogo';
import { IUEALogo } from './IUEALogo';
import { RadioMariaLogo } from './RadioMariaLogo';
import { CourseraLogo } from './CourseraLogo';
import { FreeCodeCampLogo } from './FreeCodeCampLogo';
import { GoogleLogo } from './GoogleLogo';
import { MicrosoftLogo } from './MicrosoftLogo';
import { UdemyLogo } from './UdemyLogo';
import { HorizonLogo } from './HorizonLogo';

interface LogoRendererProps {
  type: string;
  className?: string;
}

export const LogoRenderer: React.FC<LogoRendererProps> = ({ type, className = 'h-8' }) => {
  switch (type.toLowerCase()) {
    case 'egov':
    case 'egov-africa':
      return <EGovAfricaLogo className={className} />;
    case 'verditra':
      return <VerditraLogo className={className} />;
    case 'radiomaria':
    case 'radio-maria':
      return <RadioMariaLogo className={className} />;
    case 'iuea':
      return <IUEALogo className={className} />;
    case 'coursera':
      return <CourseraLogo className={className} />;
    case 'freecodecamp':
      return <FreeCodeCampLogo className={className} />;
    case 'google':
      return <GoogleLogo className={className} />;
    case 'microsoft':
      return <MicrosoftLogo className={className} />;
    case 'udemy':
      return <UdemyLogo className={className} />;
    case 'horizon':
      return <HorizonLogo className={className} />;
    default:
      return null;
  }
};
