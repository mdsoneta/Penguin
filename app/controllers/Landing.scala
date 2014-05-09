package controllers

import play.api.mvc._
import play.api.libs.ws.WS
import scala.concurrent.{ExecutionContext}
import ExecutionContext.Implicits.global

import play.api.Logger


object Landing extends Controller {

  var stockQuoteUrl = "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.quote%20WHERE%20symbol%3D%22MSFT%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="

  def landing() = Action.async {
    Logger.info("response >>>")
    WS.url(stockQuoteUrl).get().map {
      response =>
        println(response.json.toString())
        Ok(response.json.toString())

    }
  }


}
