import { keyframes, trigger, transition, state, animate, style} from '@angular/animations';

export const slideInDownAnimation =
  trigger('routeAnimation', [
    transition(':enter', [
      style({
        transform: 'translateY(-100%)',
        opacity: 0
      }),
      animate('1s ease-in', keyframes([
        style({
          opacity: 0,
          transform: 'translateY(-30%)'
        }),
        style({
          opacity: 1,
          transform: 'translateY(10%)'
        }),
        style({
          opacity: 1,
          transform: 'translateY(-5%)'
        }),
        style({
          opacity: 1,
          transform: 'translateY(0%)'
        })
      ]))
    ]),
    transition(':leave', animate('.5s ease-out', style({
        transform: 'translateY(100%)',
        opacity: 0
      })))
  ]);

  export const mainRouteAnimation =
  trigger('mainRouteAnimation', [
    transition(':enter', [
      animate('1s ease-in', keyframes([
        style({
          opacity: 0,
          transform: 'translateX(-30%)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(10%)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(-5%)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(0%)'
        })
      ]))
    ]),
    transition(':leave', [
      style({
        opacity: 0
      }),
      animate('.5s ease-out',
      style({
        transform: 'translateX(100%)',
        opacity: 0
      }))]
    )
  ]);

  export const fromLeftMainRouteAnimation =
  trigger('fromLeftMainRouteAnimation', [
    transition(':enter', [
      animate('1s ease-in', keyframes([
        style({
          opacity: 0,
          transform: 'translateX(30%)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(-10%)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(5%)'
        }),
        style({
          opacity: 1,
          transform: 'translateX(0%)'
        })
      ]))
    ]),
    transition(':leave', [
      style({
        opacity: 0
      }),
      animate('.5s ease-out',
      style({
        transform: 'translateX(100%)',
        opacity: 0
      }))]
    )

  ]);
