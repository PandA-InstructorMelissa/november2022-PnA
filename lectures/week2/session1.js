function LinkedList() {
    var length = 0  // starting length
    var head = null // placeholder

    var Node = function(element){
        this.element = element // 1st value of 1st node 1st step = turn on computer
        this.next = null // 1st next for next node = allowing for step 2 = log in to computer
    }
    this.size = function() {
        return length;
    }
    this.head = function() {
        return head
    }
    this.add = function(element) {
        var node = new Node(element)
        if (head == null){
            head = node
        }
        else{
            var currNode = head
            while(currNode.next){
                currNode = currNode.next
            }
            currNode.next = node
        }
        length++
    }
    this.addAt = function(i, element) {
        var node = new Node(element)
        var currNode = head
        var prevNode
        var currIndex = 0

        if (i > length){
            return false
        }
        if (i === 0) {
            node.next = currNode
            head = node
        }
        else {
            while(currIndex < i) {
                currIndex++
                prevNode = currNode
                currNode = currNode.next
            }
            node.next = currNode
            prevNode.next = node
        }
        length++
    }
}
let computer = new LinkedList() 
computer.add("Turn On Computer")

computer.add("Entered A Website")
computer.addAt(1,"Open Browser")
console.log(computer.head())