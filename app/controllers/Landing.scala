package controllers

import play.api.mvc._
import play.api.libs.ws.WS
import scala.concurrent.{Future, ExecutionContext}
import ExecutionContext.Implicits.global
import play.api.libs.ws
import play.api.libs.json.Json


object Landing extends Controller {

  var stockQuoteUrl = "http://query.yahooapis.com/v1/public/yql?q=SELECT%20*%20FROM%20yahoo.finance.quote%20WHERE%20symbol%3D%22MSFT%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback="

  def landing() = Action {
    Async {
      WS.url(stockQuoteUrl).get().map {
        response =>
          Ok(views.html.landing.render("obj", response.json.toString()))
      }
    }
  }


}
