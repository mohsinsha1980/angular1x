/**
 * 
 */
  
 'use strict';


angularTestExcersie.directive('testRowData', function () {
        return {
            restrict: 'EA',
            template: [  
                       '<div ng-controller="testTabController as tCtrl" ng-form name="myForm">',
                    '<div class="panel_content">',
                    '<table summary="A table listing various other formats for this product">',
       				'<thead>',
       				'<tr>',
       				'<th scope="col"></th>',
       				'<th scope="col" class="site amount"><span>Price</span></th>',
       				'<th scope="col" class="market_place amount"><span>New from</span></th>',
       				'<th scope="col" class="market_place amount"><span>Used from</span></th>',
       				'<th scope="col" class="market_place amount"><span>Edit</span></th>',
       				'<th scope="col" class="market_place amount"><span>Delete</span></th>',
       				'</tr>',
       				'</thead>',
       				'<tbody>',
                       '<tr class="active" ng-repeat="item in rowData">',
                       '<th scope="col"><a>{{item.otherFormats}}</a></th>',
       				'<td scope="col" class="site amount"><span>{{item.price}}</span></td>',
       				'<td scope="col" class="market_place amount"><span>{{item.newFrom}}</span></td>',
       				'<td scope="col" class="market_place amount"><span>{{item.usedFrom}}</span></td>',
       				'<td scope="col" class="market_place amount">',
       				'<span>',
       				'<button type="button" data-ng-click="tCtrl.editRow(item);"><img style="height:20px;width:20px;" src="./img/edit.jpg" ></button>',
       				'</span>',
       				'</td>',
       				'<td scope="col" class="market_place amount">',
       				'<span>',
       				'<button type="button"><img style="height:20px;width:20px;" src="./img/remove.png" ></button>',
       				'</span>',
       				'</td>',
                    '</tr>',
                    '</tbody>',
       				'</table>',
                    '</div>',
                    '<div class="panel-inputs">',
                    '<div>',
       				'<input type="text" style="width:40%" name="inOtherFormats" ng-model="tCtrl.inputData.otherFormats" name="otherFormats" required/>',
       				'<input type="text" style="width:13%" name="inPrice" ng-model="tCtrl.inputData.price" name="price" required/>',
       				'<input type="text" style="width:13%" name="inNewFrom" ng-model="tCtrl.inputData.newFrom" name="newFrom" required/>',
       				'<input type="text" style="width:13%"  name="inUsedFrom" ng-model="tCtrl.inputData.usedFrom" required/>',
       				'</div>',
       				'<div><button type="submit" class="" data-ng-click="tCtrl.addNewRow();">{{tCtrl.buttonText}}</button></div>',
       				'</div>'
       		    ].join(''),
            scope: {
            	rowData:"="
            },
           controller:'testTabController',
           controllerAs:'tCtrl',
            link: function (scope, element, attrs) {
                scope.rowData=scope.$eval(attrs.rowData);
                //console.log('tableitem:::' +JSON.parse(attrs.tableitem));
            },
        }
    });