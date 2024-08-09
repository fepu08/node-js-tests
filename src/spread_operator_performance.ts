import { performance } from 'perf_hooks';

export const large_object = {
  id: 1,
  name: 'Sample Object',
  description: 'This is a sample POJO with 20 properties.',
  isActive: true,
  createdAt: new Date('2023-01-01T00:00:00Z'),
  updatedAt: new Date('2023-06-01T12:00:00Z'),
  tags: ['example', 'test', 'pojo'],
  owner: {
    userId: 1001,
    username: 'owner_user',
    email: 'owner@example.com',
  },
  metadata: {
    version: '1.0',
    lastModifiedBy: 'system',
    status: 'active',
  },
  settings: {
    theme: 'dark',
    notificationsEnabled: true,
    language: 'en-US',
  },
  statistics: {
    views: 100,
    likes: 50,
    shares: 20,
  },
  location: {
    latitude: 37.7749,
    longitude: -122.4194,
  },
  content: 'This is the main content of the POJO.',
  comments: [
    {
      commentId: 1,
      userId: 2001,
      text: 'Great post!',
      createdAt: new Date('2023-07-01T08:00:00Z'),
    },
    {
      commentId: 2,
      userId: 2002,
      text: 'Very informative.',
      createdAt: new Date('2023-07-02T09:00:00Z'),
    },
  ],
  categories: ['technology', 'programming', 'javascript'],
  ratings: {
    average: 4.5,
    count: 200,
  },
  url: 'https://example.com/sample-object',
  price: 19.99,
  currency: 'USD',
};

export function measureExecutionTime(
  times: number,
  callback: (index: number, args?: any) => unknown,
  args?: any
): number {
  const startTime = performance.now();
  for (let i = 0; i < times; i++) {
    callback(i, args);
  }
  const endTime = performance.now();
  return endTime - startTime;
}

export function createObjectWithSpread(id: number) {
  return { ...large_object, id };
}

export function createObjectWithDirectPropertyAssignment(id: number) {
  return {
    id,
    name: large_object.name,
    description: large_object.name,
    isActive: large_object.name,
    createdAt: large_object.name,
    updatedAt: large_object.name,
    tags: large_object.name,
    owner: {
      userId: large_object.name,
      username: large_object.name,
      email: large_object.name,
    },
    metadata: {
      version: large_object.name,
      lastModifiedBy: large_object.name,
      status: large_object.name,
    },
    settings: {
      theme: large_object.name,
      notificationsEnabled: large_object.name,
      language: large_object.name,
    },
    statistics: {
      views: large_object.name,
      likes: large_object.name,
      shares: large_object.name,
    },
    location: {
      latitude: large_object.name,
      longitude: large_object.name,
    },
    content: large_object.name,
    comments: [
      {
        commentId: large_object.name,
        userId: large_object.name,
        text: large_object.name,
        createdAt: large_object.name,
      },
      {
        commentId: large_object.name,
        userId: large_object.name,
        text: large_object.name,
        createdAt: large_object.name,
      },
    ],
    categories: large_object.name,
    ratings: {
      average: large_object.name,
      count: large_object.name,
    },
    url: large_object.name,
    price: large_object.name,
    currency: large_object.name,
  };
}

export function createObjectWithObjectAssign(id: number) {
  const newObject = Object.assign({}, large_object);
  newObject.id = id;
  return newObject;
}

export function modifyInputObject(id: number, inputObject: any) {
  inputObject.id = id;
  return inputObject;
}
