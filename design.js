/**
 * Created by Administrator on 2017/7/28 0028.
 */

//订阅发布模式
function EventManager(){
    this.event={}                                         //事件管理仓库。
}
EventManager.prototype.on=function(topicName,handle){   //事件订阅，告诉事件管理仓库，如果 某个事件发生，按我的要求做。
    if(!this.event[topicName]){
        this.event[topicName]=[]
    }
    this.event[topicName].push(handle)
}
EventManager.prototype.fire=function(){                 //事件触发，当事件触发以后，立即执行 按照订阅者要求的方式去执行。
    var arr=[].slice.call(arguments)                    //和Array.prototype.slice.call() 效果一样。 arr.slice(indexStart,indexEnd),不传，返回值是新的数组。
    var topicName=arr.shift()
    var topicData=arr
    if(!this.event[topicName]){
        return;
    }
    this.event[topicName].forEach(function(handle){  //可能不止一个订阅者，所以要把所有订阅者要求的都处理一遍。
        handle.apply(this,topicData)
    })
}
EventManager.prototype.off=function(topicName){
    delete this.event[topicName]                      //删除 事件仓库的 监控的事件名称。
}


// 单例模式
var single=(function(){
    var instance
    function init(time){
        this.time=time
    }
    return {
        time:function(time){
            if(!instance){
                instance=new init(time)
            }
            console.log(instance)
            return instance
          }
    }
})();
single.time('2017-7-28 1:29 am')
single.time('haha')

复习前面

var a=(function(){
   var b=1
    return function(){
        return ++b
    }
})()
a() //2
a() //3


var a=function(){
    var b=1
    return function(){
        return ++b
    }
}
var c=a()
c()//2
c()//3


var a=function(){
    var b=1
    return function(){
        return ++b
    }()
}
console.log(a()) //2
console.log(a()) //2
console.log(a()) //2


// 构造模式
function Person(name,age){
    this.name=name
    this.age=age
}
Person.prototype.sayName=function(){
    console.log('hello '+this.name)
}


//工厂模式
function createPerson(name){
    var person={
        name:name,
        sayName:function(){
            console.log(this.name)
        }
    }
    return person
}



//混合模式
function  People(name,age){
    this.name=name,
        this.age=age
}
People.prototype.sayName=function(){
    console.log(this.name)
}

function create(object){
    function fn(){}
    fn.prototype=object.prototype
    return new fn()
}

function Student(name,age){
    People.call(this,name,age)
    this.work='student'
}
Student.prototype=create(People)
Student.prototype.constructor=Student
Student.prototype.doing=function(){
    console.log(this.name + 'is studying!')
}
var xiaoming=new Student('xiaoming','12')



//模块模式
var Animal=(function(){
    var name='haha'
    var age='18'
    var sayname=function(){
        console.log(name)
    }
    return {
        name:name,
        age:age,
        sayname:sayname
    }
})()


