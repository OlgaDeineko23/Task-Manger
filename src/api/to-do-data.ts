import {ITodo} from '../app/interfaces/to-do';

export const TODO_ITEMS: ITodo[] = [
  {
    id: 1,
    subject: 'To-do page - Front-end development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis justo in interdum porttitor. Morbi sodales eros vitae posuere fermentum.',
    priority: 'Low',
    category: 'Front-End',
    due: '2018-05-05',
    done: false
  }, {
    id: 2,
    subject: 'To-do page - Back-end development',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis justo in interdum porttitor. Morbi sodales eros vitae posuere fermentum. Maecenas mi sapien, imperdiet quis fermentum id, lobortis sed massa. Mauris euismod, ante vitae porttitor elementum, diam massa hendrerit enim, in tempus mi tellus nec justo. ',
    priority: 'Normal',
    category: 'Back-End',
    due: '2018-05-11',
    done: false
  },
  {
    id: 3,
    subject: 'To-do page - Design',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer venenatis justo in interdum porttitor. Morbi sodales eros vitae posuere fermentum. Maecenas mi sapien, imperdiet quis fermentum id, lobortis sed massa. Mauris euismod, ante vitae porttitor elementum, diam massa hendrerit enim, in tempus mi tellus nec justo. Aenean euismod luctus tellus, at sollicitudin orci facilisis in. Phasellus ac blandit tortor, eget iaculis arcu. Vestibulum magna lectus, aliquam eu velit a, fringilla auctor diam. Suspendisse potenti.',
    priority: 'High',
    category: 'Design',
    due: '2018-05-12',
    done: true
  }
];
