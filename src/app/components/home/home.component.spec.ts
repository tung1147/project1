import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { SbomSearchComponent } from 'app/components/sbom-search/sbom-search.component';
import { UnauthorizedComponent } from 'app/components/shared/unauthorized.component';
import { PageNotFoundComponent } from 'app/components/shared/pagenotfound.component';
import { AppComponent } from 'app/app.component';
import { SbomSearchModule } from 'app/components/sbom-search/sbom.search.module';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';
import { NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MenuService } from 'app/services/menu.service';
import { NotificationService } from 'app/services/notification.service';
import { Observable } from 'rxjs/Observable';
import { By } from '@angular/platform-browser';


describe('HomeComponent', () => {

  class MenuServiceMock {
    GetMenu(): Observable<any> {
      const model = {
        'applicationLogo': '/CDN/Content/images/warplogo.png',
        'applicationName': 'Service Supply Chain',
        'applicationVersion': '1.0.0.0',
        'logoutUrl': '',
        'rootUrl': '',
        'dashboardUrl': '',
        'menuItems': [
          {
            'type': 'Link',
            'text': 'Service BOM Search',
            'tag': '',
            'href': '/search',
            'image': 'search',
            'permission': ''
          },
          {
            'type': 'Link',
            'text': 'Service NPI Admin and Rules',
            'tag': '',
            'href': '/',
            'image': 'account_box',
            'permission': ''
          }]
      };
      return Observable.of(model);
    };
  }


  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [MaterialModule, CommonModule, RouterTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [{ provide: MenuService, useClass: MenuServiceMock }, NotificationService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  describe('Render elements:', () => {

    it('should, render menu on screen', () => {
      const elem = fixture.debugElement.queryAll(By.css('a'));
      expect(elem.length).toEqual(2);
      expect(elem[0].attributes.class).toContain('dashboard-btn');
      expect(elem[0].nativeElement.href).toContain('search');
      expect(elem[0].nativeElement.text).toContain('Service BOM');
      expect(elem[1].nativeElement.text).toContain('NPI Admin');
    });


    describe('Menu service:', () => {

      it('should, load all menu into model', () => {
        component.LoadMenu();
        expect(component.data.applicationName).toEqual('Service BOM Management');
        expect(component.data.menuItems.length).toEqual(2);
        expect(component.data.applicationVersion).toEqual('1.0.0.0');
        expect(component.data.menuItems[0].text).toEqual('Service BOM Search');
        expect(component.data.menuItems[1].text).toEqual('Service NPI Admin and Rules');
      });
    });
  });


});
