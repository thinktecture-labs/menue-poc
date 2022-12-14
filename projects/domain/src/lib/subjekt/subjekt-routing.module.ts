import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SubjectDetailComponent} from "./subject-detail/subject-detail.component";

const routes: Routes = [
    {
        path: '', component: SubjectDetailComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SubjektRoutingModule {
}
