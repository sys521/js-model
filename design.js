/**
 * Created by Administrator on 2017/7/28 0028.
 */

//���ķ���ģʽ
function EventManager(){
    this.event={}                                         //�¼�����ֿ⡣
}
EventManager.prototype.on=function(topicName,handle){   //�¼����ģ������¼�����ֿ⣬��� ĳ���¼����������ҵ�Ҫ������
    if(!this.event[topicName]){
        this.event[topicName]=[]
    }
    this.event[topicName].push(handle)
}
EventManager.prototype.fire=function(){                 //�¼����������¼������Ժ�����ִ�� ���ն�����Ҫ��ķ�ʽȥִ�С�
    var arr=[].slice.call(arguments)                    //��Array.prototype.slice.call() Ч��һ���� arr.slice(indexStart,indexEnd),����������ֵ���µ����顣
    var topicName=arr.shift()
    var topicData=arr
    if(!this.event[topicName]){
        return;
    }
    this.event[topicName].forEach(function(handle){  //���ܲ�ֹһ�������ߣ�����Ҫ�����ж�����Ҫ��Ķ�����һ�顣
        handle.apply(this,topicData)
    })
}
EventManager.prototype.off=function(topicName){
    delete this.event[topicName]                      //ɾ�� �¼��ֿ�� ��ص��¼����ơ�
}


// ����ģʽ
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

��ϰǰ��

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


// ����ģʽ
function Person(name,age){
    this.name=name
    this.age=age
}
Person.prototype.sayName=function(){
    console.log('hello '+this.name)
}


//����ģʽ
function createPerson(name){
    var person={
        name:name,
        sayName:function(){
            console.log(this.name)
        }
    }
    return person
}



//���ģʽ
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



//ģ��ģʽ
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


