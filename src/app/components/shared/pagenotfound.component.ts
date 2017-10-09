import {Component} from '@angular/core';

@Component({
    template: `<div class="container center-block vertical-center">
                <div class="">
                    <div class="row">
                        <div class="col col-12">
                            <h1>404 - Not Found.</h1>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col col-12">
                            <h2> Sorry! the resource you are looking for is not found. Please try different resource/url.</h2>
                        </div>
                    </div>
                </div>
                </div>`
})

export class PageNotFoundComponent {
    constructor() { }
}