import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import ROUTES from "@/constants/route";
import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNavigation = () => {
  return (
    <Sheet>
      <SheetTrigger
        nativeButton={false}
        render={
          <Image src="/icons/hamburger.svg" width={36} height={36} alt="Menu" className="invert-colors sm:hidden" />
        }
      />
      <SheetContent side="left" className="background-light900_dark200 border-none">
        <SheetTitle className="hidden">Navigation</SheetTitle>
        <Link href="/" className="flex items-center gap-1">
          <Image src="/images/site-logo.svg" width={30} height={30} alt="DevHocket Logo" />
          <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900">
            Dev
            <span className="text-primary-300">Hocket</span>
          </p>
        </Link>
        <div className="no-scrollbar flex h-[calc(100vh-80px)] flex-col justify-between overflow-y-auto">
          <SheetClose nativeButton={false} render={<section className="flex h-full flex-col gap-6 pt-16" />}>
            <NavLinks isMobileNav />
          </SheetClose>
          <div className="flex flex-col gap-3">
            <SheetClose nativeButton={false} render={<Link href={ROUTES.SIGN_IN} />}>
              <Button className="small-medium btn-secondary min-h-10.25 w-full rounded-lg px-4 py-3 shadow-none">
                <span className="primary-text-gradient">Log In</span>
              </Button>
            </SheetClose>
            <SheetClose nativeButton={false} render={<Link href={ROUTES.SIGN_UP} />}>
              <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-10.25 w-full rounded-lg border px-4 py-3 shadow-none">
                Sign Up
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavigation;
