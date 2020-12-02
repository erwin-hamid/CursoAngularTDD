import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CarouselComponent } from './carousel/carousel.component';

import { LandingPageComponent } from './landing-page.component';
import { MoviesFilterComponent } from './movies-filter/movies-filter.component';
import { NavBarSocialComponent } from './nav-bar-social/nav-bar-social.component';
import { NavbarMenuComponent } from './navbar-menu/navbar-menu.component';
import { PremiersComponent } from './premiers/premiers.component';
import { WeeklyBilboardsComponent } from './weekly-bilboards/weekly-bilboards.component';

describe('LandingPageComponent', () => {
  let component: LandingPageComponent;
  let fixture: ComponentFixture<LandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        LandingPageComponent,
        CarouselComponent,
        MoviesFilterComponent,
        NavbarMenuComponent,
        NavBarSocialComponent,
        PremiersComponent,
        WeeklyBilboardsComponent
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
