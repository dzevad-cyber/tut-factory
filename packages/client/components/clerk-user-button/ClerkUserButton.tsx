import { UserButton } from '@clerk/nextjs';

const ClerkUserButton = () => {
  return (
    <UserButton
      afterSignOutUrl='/'
      appearance={{
        elements: {
          avatarBox: {
            width: '4rem',
            height: '4rem',
          },
          userPreviewMainIdentifier: {
            fontSize: '1.6rem',
          },
          userPreviewSecondaryIdentifier: {
            fontSize: '1.1rem',
            color: 'hsl(20, 14.3%, 4.1%)',
          },
          userButtonPopoverActionButtonIcon: {
            width: '1.2rem',
            height: '1.2rem',
            color: 'hsl(20, 14.3%, 4.1%)',
          },
          userButtonPopoverActionButtonText: {
            fontSize: '1.2rem',
            color: 'hsl(20, 14.3%, 4.1%)',
          },
        },
      }}
    />
  );
};

export default ClerkUserButton;
