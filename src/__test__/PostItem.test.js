import React from 'react';
import { render ,screen } from '@testing-library/react';
import { PostItem } from '../components';


test('Render title in <PostItem />', () => {
  const { getByText } = render(
    <PostItem
      title='title'
      body="body"
      id={1}
      userId={1}
      name="name"
      username="username"
      totalComments={1}
      company={'company'}
    />
  );

  expect(getByText(/title/i)).toBeInTheDocument();
});

test('Render body in <PostItem />', () => {
  const { getByText } = render(
    <PostItem
      title='title'
      body="body"
      id={1}
      userId={1}
      name="name"
      username="username"
      totalComments={1}
      company={'company'}
    />
  );

  expect(getByText(/body/i)).toBeInTheDocument();
});
