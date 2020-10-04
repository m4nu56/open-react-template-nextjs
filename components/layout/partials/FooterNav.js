import React from 'react';
import classNames from 'classnames';
import Link from 'next/link'

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <Link href="#2">Contact</Link>
        </li>
        <li>
          <Link href="#3">About us</Link>
        </li>
        <li>
          <Link href="#4">FAQ's</Link>
        </li>
        <li>
          <Link href="#5">Support</Link>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
