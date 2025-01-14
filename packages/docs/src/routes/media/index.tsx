import { component$, useStyles$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import styles from './media.css?inline';

export const MEDIA = mediaObj({
  videos: [
    {
      href: 'https://youtu.be/x2eF3YLiNhY',
      imgSrc: 'http://i3.ytimg.com/vi/x2eF3YLiNhY/hqdefault.jpg',
      title: "Qwik… the world's first O(1) JavaScript framework?",
    },
    {
      href: 'https://youtu.be/z14c3u9q8rI',
      imgSrc: 'http://i3.ytimg.com/vi/z14c3u9q8rI/hqdefault.jpg',
      title: 'Qwik JS and the future of frameworks',
    },
    {
      href: 'https://www.youtube.com/watch?v=BxGbnLb5i9Q',
      imgSrc: 'http://i3.ytimg.com/vi/BxGbnLb5i9Q/hqdefault.jpg',
      title: 'Qwik: Under-The-Hood of a Resumable JavaScript Framework',
    },
    {
      href: 'https://www.youtube.com/watch?v=qKCX7Qz1oG8',
      imgSrc: 'http://i3.ytimg.com/vi/qKCX7Qz1oG8/hqdefault.jpg',
      title: 'Is Qwik + RxJS actually possible?',
    },
    {
      href: 'https://www.youtube.com/watch?v=dbxP9FX5j2o',
      imgSrc: 'http://i3.ytimg.com/vi/dbxP9FX5j2o/hqdefault.jpg',
      title: 'Qwik-ifying React SPA to create the fastest possible website',
    },
    {
      href: 'https://www.youtube.com/watch?v=Ts2IWXMYiXk',
      imgSrc: 'http://i3.ytimg.com/vi/Ts2IWXMYiXk/hqdefault.jpg',
      title: 'Après Angular : place à Qwik!',
    },
    {
      href: 'https://www.youtube.com/watch?v=Mi7udzhcCDQ',
      imgSrc: 'http://i3.ytimg.com/vi/Mi7udzhcCDQ/hqdefault.jpg',
      title: 'Qwik Core Developers Training',
    },
  ],
  podcasts: [
    {
      href: 'https://www.youtube.com/watch?v=_PDpoJUacuc',
      imgSrc: 'http://i3.ytimg.com/vi/_PDpoJUacuc/hqdefault.jpg',
      title: 'Build Resumable Apps with Qwik',
    },
    {
      href: 'https://www.youtube.com/watch?v=fa6-Mn0Eybg',
      imgSrc: 'http://i3.ytimg.com/vi/fa6-Mn0Eybg/hqdefault.jpg',
      title: 'Qwik + React State (and a new mic!)',
    },
    {
      href: 'https://www.youtube.com/watch?v=iJZaT-AvJ-o',
      imgSrc: 'http://i3.ytimg.com/vi/iJZaT-AvJ-o/hqdefault.jpg',
      title: 'Introducing Qwik w/ Misko Hevery & Shai Reznik',
    },
    {
      href: 'https://www.youtube.com/watch?v=LbMRs7l4czI',
      imgSrc: 'http://i3.ytimg.com/vi/LbMRs7l4czI/hqdefault.jpg',
      title: 'Resumable Apps in Qwik',
    },
    {
      href: 'https://www.youtube.com/watch?v=0tCuUQe_ZA0',
      imgSrc: 'http://i3.ytimg.com/vi/0tCuUQe_ZA0/hqdefault.jpg',
      title: 'Qwik: A no-hydration instant-on personalized web applications',
    },
    {
      href: 'https://www.youtube.com/watch?v=7MgNMIPISY4',
      imgSrc: 'http://i3.ytimg.com/vi/7MgNMIPISY4/hqdefault.jpg',
      title: 'QWIK - Set of great demos by Misko Hevery',
    },
  ],
  presentations: [
    {
      href: 'https://www.youtube.com/watch?v=0dC11DMR3fU&amp;t=154s',
      imgSrc: 'http://i3.ytimg.com/vi/0dC11DMR3fU/hqdefault.jpg',
      title: 'WWC22 - Qwik + Partytown: How to remove 99% of JavaScript from main thread',
    },
    {
      href: 'https://www.youtube.com/watch?v=GHbNaDSWUX8',
      imgSrc: 'http://i3.ytimg.com/vi/GHbNaDSWUX8/hqdefault.jpg',
      title: 'Qwik Workshop Part 1 - Live Coding',
    },
    {
      href: 'https://www.youtube.com/watch?v=Jf_E1_19aB4&t=629s',
      imgSrc: 'http://i3.ytimg.com/vi/Jf_E1_19aB4/hqdefault.jpg',
      title: 'Qwik framework overview',
    },
  ],
  blogs: [
    {
      href: 'https://www.builder.io/blog/hydration-is-pure-overhead',
      title: 'Hydration is Pure Overhead',
    },
    {
      href: 'https://dev.to/mhevery/a-first-look-at-qwik-the-html-first-framework-af',
      title: 'HTML-first, JavaScript last: the secret to web speed!',
    },
    {
      href: 'https://dev.to/builderio/a-first-look-at-qwik-the-html-first-framework-af',
      title: 'A first look at Qwik - the HTML first framework',
    },
    {
      href: 'https://dev.to/mhevery/death-by-closure-and-how-qwik-solves-it-44jj',
      title: 'Death by Closure (and how Qwik solves it)',
    },

    {
      href: 'https://dev.to/mhevery/qwik-the-answer-to-optimal-fine-grained-lazy-loading-2hdp',
      title: 'Qwik: the answer to optimal fine-grained lazy loading',
    },
  ],
  resources: [
    {
      href: 'https://docs.google.com/presentation/d/1Jj1iw0lmaecxtUpqyNdF1aBzbCVnSlbPGLbOpN2xydc/edit#slide=id.g13225ffe116_6_234',
      title: 'Qwik - Google Presentation Template',
    },
    { href: '/logos/qwik-logo.svg', title: 'Qwik SVG Logo [svg]' },
    { href: '/logos/qwik.svg', title: 'Qwik Logo and Text [svg]' },
    { href: '/logos/qwik.png', title: 'Qwik Logo and Text [png]' },
  ],
});

export interface MediaEntry {
  title: string;
  href: string;
  imgSrc?: string;
}

export const ThumbnailLink = component$((props: { entry: MediaEntry; imgLoading?: 'eager' }) => {
  return (
    <li>
      <a href={props.entry.href} target="_blank" rel="noreferrer">
        <img
          src={props.entry.imgSrc}
          loading={props.imgLoading === 'eager' ? undefined : 'lazy'}
          decoding={props.imgLoading === 'eager' ? undefined : 'async'}
          aria-hidden="true"
        />
        <p>{props.entry.title}</p>
      </a>
    </li>
  );
});

export const BulletLink = component$((props: { entry: MediaEntry }) => {
  return (
    <li>
      <a href={props.entry.href} target="_blank" rel="noreferrer">
        {props.entry.title}
      </a>
    </li>
  );
});

export const Section = component$(
  (props: {
    id: keyof typeof MEDIA;
    listStyle: 'thumbnails' | 'bullets';
    imgLoading?: 'eager';
  }) => {
    const capitalized = [props.id[0].toUpperCase(), ...props.id.slice(1)].join('');
    return (
      <section id={props.id}>
        <h2>
          <a href={`#${props.id}`}>{capitalized}</a>
        </h2>

        <ul class={props.listStyle}>
          {MEDIA[props.id].map((entry) =>
            props.listStyle === 'thumbnails' ? (
              <ThumbnailLink entry={entry} imgLoading={props.imgLoading} />
            ) : (
              <BulletLink entry={entry} />
            )
          )}
        </ul>
      </section>
    );
  }
);

export default component$(() => {
  useStyles$(styles);
  return (
    <article class="media">
      <h1>Qwik Presentations, Talks, Videos and Podcasts</h1>

      <Section id="videos" listStyle="thumbnails" imgLoading="eager" />

      <Section id="podcasts" listStyle="thumbnails" />

      <Section id="presentations" listStyle="thumbnails" />

      <Section id="blogs" listStyle="bullets" />

      <Section id="resources" listStyle="bullets" />

      <section>
        <h2>Add Media</h2>
        <p>This page missing any great resources or in need of an update?</p>
        <p>
          <a
            href="https://github.com/BuilderIO/qwik/edit/main/packages/docs/src/routes/media/index.tsx"
            target="_blank"
            class="edit-page"
          >
            Edit this page!
          </a>
        </p>
      </section>
    </article>
  );
});

export const head: DocumentHead = {
  title: 'Qwik Presentations, Talks, Videos and Podcasts',
};

// Media Listing

// Helper function to allow autocompletions for Media Entries and Record keys
export function mediaObj<T extends string>(obj: Record<T, MediaEntry[]>) {
  return obj;
}
