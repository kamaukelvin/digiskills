<template>
	<div id="chartdiv"></div>
</template>
<script>
import * as am4core from '@amcharts/amcharts4/core';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4geodata_worldLow from '@amcharts/amcharts4-geodata/worldLow';
import Marker from '../assets/images/marker.png';
export default {
	name: 'Map',

	mounted() {
		/* Create map instance */
		var chart = am4core.create('chartdiv', am4maps.MapChart);

		/* Set map definition */
		chart.geodata = am4geodata_worldLow;

		/* Set projection */
		chart.projection = new am4maps.projections.Miller();

		/* Northern Africa */
		var series1 = chart.series.push(new am4maps.MapPolygonSeries());
		series1.name = 'Northern Africa';
		series1.useGeodata = true;
		series1.include = ['MR', 'LY', 'DZ', 'EG', 'EH', 'MA', 'TN'];
		series1.mapPolygons.template.tooltipText = '{name}';
		series1.mapPolygons.template.fill = am4core.color('#309F92');
		series1.fill = am4core.color('#309F92');

		/* Central Africa */
		var series2 = chart.series.push(new am4maps.MapPolygonSeries());
		series2.name = 'Central Europe';
		series2.useGeodata = true;
		series2.include = ['TD', 'CM', 'CD', 'CF', 'CG', 'GA', 'GQ'];
		series2.mapPolygons.template.tooltipText = '{name}';
		series2.mapPolygons.template.fill = am4core.color('#00BC9A');
		series2.fill = am4core.color('#00BC9A');

		/* Eastern Africa */
		var series3 = chart.series.push(new am4maps.MapPolygonSeries());
		series3.name = 'Eastern Europe';
		series3.useGeodata = true;
		series3.include = ['KE', 'SD', 'SS', 'UG', 'ER', 'ET', 'SO', 'RW', 'BI', 'TZ', 'MG'];
		series3.mapPolygons.template.tooltipText = '{name}';
		series3.mapPolygons.template.fill = am4core.color('#37ECD6');
		series3.fill = am4core.color('#37ECD6');

		/* Southern Africa */
		var series4 = chart.series.push(new am4maps.MapPolygonSeries());
		series4.name = 'Southeast Europe';
		series4.useGeodata = true;
		series4.include = ['AO', 'MW', 'ZM', 'MZ', 'ZW', 'NA', 'BW', 'ZA', 'SZ', 'LS'];
		series4.mapPolygons.template.tooltipText = '{name}';
		series4.mapPolygons.template.fill = am4core.color('#0078BC');
		series4.fill = am4core.color('#0078BC');

		/* Western Africa */
		var series5 = chart.series.push(new am4maps.MapPolygonSeries());
		series5.name = 'Western Europe';
		series5.useGeodata = true;
		series5.include = ['SN', 'ML', 'NE', 'NG', 'BJ', 'TG', 'GH', 'BF', 'CI', 'GW', 'GN', 'LR', 'SL'];
		series5.mapPolygons.template.tooltipText = '{name}';
		series5.mapPolygons.template.fill = am4core.color('#21BADC');
		series5.fill = am4core.color('#21BADC');

		// Markers
		let imageSeries = chart.series.push(new am4maps.MapImageSeries());

		let imageSeriesTemplate = imageSeries.mapImages.template;
		let marker = imageSeriesTemplate.createChild(am4core.Image);
		marker.href = Marker;
		marker.width = 20;
		marker.height = 20;
		marker.nonScaling = true;
		marker.tooltipText = '{info}';
		marker.horizontalCenter = 'middle';
		marker.verticalCenter = 'bottom';
		marker.fill = am4core.color('#FFF');

		// Set property fields
		imageSeriesTemplate.propertyFields.latitude = 'latitude';
		imageSeriesTemplate.propertyFields.longitude = 'longitude';

		// Add data for the three cities
		imageSeries.data = [
			{
				latitude: 5.9577,
				longitude: 38.2972,
				info: 'I will bear certain info about region for East Africa',
			},
			{
				latitude: 4.8964,
				longitude: 19.507613,
				info: 'I will bear certain info about region for Central Africa',
			},
			{
				latitude: -20.9892,
				longitude: 23.49785,
				info: 'I will bear certain info about southern region',
			},
			{
				latitude: 15.8383,
				longitude: 3.6697,
				info: 'I will bear certain info about west region',
			},
			{
				latitude: 27.7583,
				longitude: 9.7342,
				info: 'I will bear certain info about north region',
			},
		];
	},

	beforeDestroy() {
		if (this.map) {
			this.map.dispose();
		}
	},
};
</script>

<style scoped>
#chartdiv {
	width: 100%;
	height: 100%;
}
</style>
