(function(Ext){Ext.ns('Hippo.Reports.Chart');Hippo.Reports.Chart.PieChart=Ext.extend(Ext.chart.PieChart,{isFlashAvailable:function(e){return typeof this.swf!=='undefined'&&typeof this.swf.setType!=='undefined'&&typeof this.swf.setDataProvider!=='undefined'},onFlashEvent:function(e){if(e.type=='swfReady'){if(!this.isFlashAvailable()){(function(){var element=Ext.getDom(this.id);var parent=element.parentNode;parent.appendChild(parent.removeChild(element))}).defer(100,this,[])}else{Hippo.Reports.Chart.PieChart.superclass.onFlashEvent.apply(this,arguments);this.fireEvent('swfReallyReady',this)}}else if(e.type!=='log'){Hippo.Reports.Chart.PieChart.superclass.onFlashEvent.apply(this,arguments)}},refresh:function(){if(this.isFlashAvailable()){Hippo.Reports.Chart.PieChart.superclass.refresh.apply(this,arguments)}}});Ext.reg('Hippo.Reports.Chart.PieChart',Hippo.Reports.Chart.PieChart);Hippo.Reports.Chart.ColumnChart=Ext.extend(Ext.chart.ColumnChart,{isFlashAvailable:function(e){return typeof this.swf!=='undefined'&&typeof this.swf.setType!=='undefined'&&typeof this.swf.setDataProvider!=='undefined'},onFlashEvent:function(e){if(e.type=='swfReady'){if(!this.isFlashAvailable()){(function(){var element=Ext.getDom(this.id);var parent=element.parentNode;parent.appendChild(parent.removeChild(element))}).defer(100,this,[])}else{Hippo.Reports.Chart.ColumnChart.superclass.onFlashEvent.apply(this,arguments);this.fireEvent('swfReallyReady',this)}}else if(e.type!=='log'){Hippo.Reports.Chart.ColumnChart.superclass.onFlashEvent.apply(this,arguments)}},refresh:function(){if(this.isFlashAvailable()){Hippo.Reports.Chart.ColumnChart.superclass.refresh.apply(this,arguments)}}});Ext.reg('Hippo.Reports.Chart.ColumnChart',Hippo.Reports.Chart.ColumnChart);Hippo.Reports.Chart.BarChart=Ext.extend(Ext.chart.BarChart,{isFlashAvailable:function(e){return typeof this.swf!=='undefined'&&typeof this.swf.setType!=='undefined'&&typeof this.swf.setDataProvider!=='undefined'},onFlashEvent:function(e){if(e.type=='swfReady'){if(!this.isFlashAvailable()){(function(){var element=Ext.getDom(this.id);var parent=element.parentNode;parent.appendChild(parent.removeChild(element))}).defer(100,this,[])}else{Hippo.Reports.Chart.BarChart.superclass.onFlashEvent.apply(this,arguments);this.fireEvent('swfReallyReady',this)}}else if(e.type!=='log'){Hippo.Reports.Chart.BarChart.superclass.onFlashEvent.apply(this,arguments)}},refresh:function(){if(this.isFlashAvailable()){Hippo.Reports.Chart.BarChart.superclass.refresh.apply(this,arguments)}}});Ext.reg('Hippo.Reports.Chart.BarChart',Hippo.Reports.Chart.BarChart)})(Ext);